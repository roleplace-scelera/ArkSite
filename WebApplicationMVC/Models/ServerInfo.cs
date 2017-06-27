using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QueryMaster;
using WebApplicationMVC.Controllers;

namespace WebApplicationMVC.Models
{
    /// <summary>
    /// Master Class to be renamed
    /// </summary>
    public class ServerInfo
    {
        // Init Connection Object
        private QueryMaster.GameServer.Server _server { get => new Connection().Server; }

        /// <summary>
        /// Object Info Relevant to the Server
        /// Ex: address, enviornment, players online, etc
        /// </summary>
        private QueryMaster.GameServer.ServerInfo _serverInfo { get => _server.GetInfo(); }

        /// <summary>
        /// Collection of Player Objetcs 
        /// Players:
        ///     Name (In Game), Score(Kills?), Time Connected (Current Session)
        /// </summary>
        public QueryMasterCollection <QueryMaster.GameServer.PlayerInfo> PlayerList { get => _server.GetPlayers(); }

        /// <summary>
        /// Collection of Server Rules
        /// Params: 
        ///     Name of Rule, Value of Rule
        /// These otherwise dont seem very useful
        /// </summary>
        public QueryMasterCollection <QueryMaster.GameServer.Rule> ServerRules { get => _server.GetRules(); }



        // Map Attributes && Values to Props for ViewBag Strong Typing 
        public string Description { get => _serverInfo.Description; }
        public string Name { get => _serverInfo.Name; }
        public string Address { get => _serverInfo.Address; }
        public QueryMaster.GameServer.GameEnvironment Enviornment { get => _serverInfo.Environment; }
        public string ExtraInfo { get => _serverInfo.ExtraInfo.ToString(); }
        public string GameVersion { get => _serverInfo.GameVersion; }
        public ushort ID { get => _serverInfo.Id; }
        public string Map { get => _serverInfo.Map; }
        public int MaxPlayers { get => _serverInfo.MaxPlayers; }
        public int PlayersOnline { get => _serverInfo.Players; }
        public byte Protocol { get => _serverInfo.Protocol; }
        public QueryMaster.GameServer.GameServertype ServerType { get => _serverInfo.ServerType; }
        public int Bots { get => _serverInfo.Bots; }
        public long Ping { get => _serverInfo.Ping; }
        public QueryMaster.GameServer.Logs Logs { get => _server.GetLogs(27001); }

    }

}
    
