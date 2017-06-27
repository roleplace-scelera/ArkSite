using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QueryMaster;
using Newtonsoft.Json;
using System.Web.Script.Serialization;

namespace ArkSite.Models
{
    public class ArkServer
    {
        private QueryMaster.GameServer.Server _server;
        private static readonly Game _game = QueryMaster.Game.ARK_Survival_Evolved;
        private static readonly String _ip = "85.190.157.119";
        private static readonly ushort _port = 27001;
        private JavaScriptSerializer js = new JavaScriptSerializer();
        
        /// <summary>
        /// Create Connection Object Handler
        /// </summary>
        public ArkServer()
        {
            _server = QueryMaster.GameServer.ServerQuery.GetServerInstance(_game, _ip, _port);
        }
        // Code that runs on application startup
        // Testing 

        public string GetServer()
        {
            return js.Serialize(_server);
        }
             
        public String GetServerInfo()
        {
            return js.Serialize(_server.GetInfo());
        }
        //System.Diagnostics.Debug.WriteLine(ServerInfo.Description + " " + ServerInfo.ExtraInfo + " " + " " + ServerInfo.Name);
    }
}