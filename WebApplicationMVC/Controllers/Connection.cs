using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QueryMaster;

namespace WebApplicationMVC.Controllers
{
    /// <summary>
    /// Simple Server Connection Class
    /// to be used as a base by other classes
    /// to establish connection to Steam Server
    /// </summary>
    public class Connection
    {
        /// <summary>
        /// Steam Enum Value for Game Name
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
        /// Query Server Instance From Steam given paramaters above
        /// </summary>
        public QueryMaster.GameServer.Server Server
        { get => QueryMaster.GameServer.ServerQuery.GetServerInstance(_game, _ip, _port); }
    }
}