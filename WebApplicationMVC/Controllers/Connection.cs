using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QueryMaster;

namespace WebApplicationMVC.Controllers
{
    /// <summary>
    /// Simple Server Connection Class
    /// Used as a base by other classes
    /// to establish Steam Server Connection
    /// </summary>
    public class Connection
    {
        /// <summary>
        /// Steam Enum for Game Name
        /// </summary>
        public static readonly Game _game = QueryMaster.Game.ARK_Survival_Evolved;
        /// <summary>
        /// Server IP
        /// </summary>
        public static readonly String _ip = "85.190.157.119";
        /// <summary>
        /// Connection Port to be Added to IP
        /// </summary>
        public static readonly ushort _port = 27001;

        /// <summary>
        /// Query Server Instance From Steam 
        /// </summary>
        public QueryMaster.GameServer.Server Server
        { get => QueryMaster.GameServer.ServerQuery.GetServerInstance(_game, _ip, _port); }
    }
}