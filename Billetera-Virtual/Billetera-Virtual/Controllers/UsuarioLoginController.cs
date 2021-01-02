using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;
using Billetera_Virtual.Models;
using System.Web.Http.Cors;

namespace Billetera_Virtual.Controllers
{
    [RoutePrefix("api/usuarioLogin")]
    public class UsuarioLoginController: ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpPost]
        public Usuario Post(LoginUsuario login)
        {
            GestorUsuario gUsuario = new GestorUsuario();
            return gUsuario.ObtenerIdPorLogin(login);
        }
    }
}