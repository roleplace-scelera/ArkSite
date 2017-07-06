using ArkData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Net;

namespace WebApplicationMVC.Models
{
    /// <summary>
    /// Class that consumes methods from the ArkData Library
    /// to parse through .tribeark and .arkprofile files, kept in
    /// the SavedArks Server Directory. These files are normally too
    /// gross to read, but now we can:
    ///     Ex. 1 Easily Access Player Steam Data (Avatar, Bans, ID, and more)
    ///     Ex. 2 List Tribe Names and the Child Player Names 
    ///     And more!
    /// </summary>
    public class ServerDataParser
    {
        // TODO: Move IP / Port to global or config
        private static readonly string IP = "85.190.157.119";
        private static readonly ushort Port = 27001;
        private static string Path = ConfigurationManager.AppSettings["Path"];
        private static string Key = ConfigurationManager.AppSettings["SteamKey"];
       
        public IEnumerable<IPlayer> OnlinePlayers;
        public double AverageLevel;
        public Container Container;

        /// <summary>
        /// Constructor that does most of the work
        /// Probs bad stlye 
        /// </summary>
        public ServerDataParser()
        {
            // Initialize Shared Dependencies
            var playerParser = new PlayerFileParser();
            var tribeParser = new TribeFileParser();
            var steamApi = new SteamApi();
            var steamServer = new SteamServer();
            // Parse Server Endpoint
            var Server = new IPEndPoint(IPAddress.Parse(IP), Port);

            // Slap It All Together
            Container = new Container(playerParser, tribeParser, steamApi, steamServer);
            //Container.LoadDirectory("$(SolutionDir)SavedArks");
            // TODO: fix file pathing. 
            // ffs ive tried so much shit whatever direct pathing for now
            Container.LoadDirectory(@"C:\Users\rpeti\Documents\visual studio 2017\Projects\ArkSite\SavedArks");
            Container.LoadSteamData(Key);
            Container.LoadOnlinePlayers(Server);
            Container.LinkPlayersAndTribes();
            OnlinePlayers = Container.Players.Where(p => p.Online);
            AverageLevel = Container.Players.Average(p => p.Level);
        }
    }
}