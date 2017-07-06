using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QueryMaster;
using WebApplicationMVC.Controllers;

namespace WebApplicationMVC.Models
{
    /// <summary>
    /// Experimental POC Class For Server 
    /// Testing "Functional" Approach 
    /// Under Construction 
    /// </summary>
    public class ServerInfo
    {
        // Init Connection Object
        private QueryMaster.GameServer.Server _server { get => new Connection().Server; }

        /// <summary>
        /// Object containing info belonging to the Server
        /// Ex: address, enviornment, players online, etc
        /// </summary>
        private QueryMaster.GameServer.ServerInfo _serverInfo { get => _server.GetInfo(); }

        /// <summary>
        /// Collection of Player Objetcs 
        /// Players:
        ///     Name (In Game), Score(Kills?), Time Connected (Current Session)
        ///     Pretty fucking lack-luster, ServerDataParses severly better 
        /// </summary>
        public QueryMasterCollection <QueryMaster.GameServer.PlayerInfo> PlayerList { get => _server.GetPlayers(); }

        /// <summary>
        /// Collection of Server Rules
        /// Params: 
        ///    Name of Rule, Value of Rule
        ///    Not entirely useful on its own
        /// Better solution would be to parse game.ini & gamesettings.ini
        /// for rules and serve to DB / model
        /// </summary>
        public QueryMasterCollection <QueryMaster.GameServer.Rule> ServerRules { get => _server.GetRules(); }

        /// <summary>
        /// Steam Web API Interface 
        ///     TODO: Come back and see what I can make it do
        /// </summary>
        public QueryMaster.Steam.SteamQuery Query { get => new QueryMaster.Steam.SteamQuery(); }

        // *** DEPENDECNIES END VANILLA PROPS BEGIN ***

        public string Description { get => _serverInfo.Description; }

        public string Name { get => _serverInfo.Name; }     

        public string Address { get => _serverInfo.Address; }       // Server IP

        public QueryMaster.GameServer.GameEnvironment Enviornment { get => _serverInfo.Environment; }

        /// <summary>
        /// Extra Info contains:
        //     Server's SteamID.
        //     Tags that describe the game according to the server.
        //     The server's 64-bit GameID.
        /// </summary>
        public string ExtraInfo { get => _serverInfo.ExtraInfo.ToString(); }

        public string GameVersion { get => _serverInfo.GameVersion; }

        public ushort ID { get => _serverInfo.Id; }                 // Steam APP ID

        public string Map { get => _serverInfo.Map; }               // Currently Loaded Map

        public int MaxPlayers { get => _serverInfo.MaxPlayers; }

        public int PlayersOnline { get => _serverInfo.Players; }

        public byte Protocol { get => _serverInfo.Protocol; }

        /// <summary>
        /// Dedicated || Non Dedicated || Proxy
        /// </summary>
        public QueryMaster.GameServer.GameServertype ServerType { get => _serverInfo.ServerType; }

        public int Bots { get => _serverInfo.Bots; }

        public long Ping { get => _serverInfo.Ping; }

        // public QueryMaster.GameServer.Logs Logs { get => _server.GetLogs(27001); }
    }
}
    
