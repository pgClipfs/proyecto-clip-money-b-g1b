using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;
using Billetera_Virtual.Models;
using System.Web.Http.Cors;
using System.Drawing;

namespace Billetera_Virtual.Controllers
{
    [RoutePrefix("api/usuario")]
    public class UsuarioController : ApiController
    {

        //[Authorize]
        // GET: api/Usuario
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IEnumerable<Usuario> Get()
        {
            GestorUsuario gUsuario = new GestorUsuario();
            return gUsuario.ObtenerUsuarios();
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Usuario Get(int id)
        {
            GestorUsuario gUsuario = new GestorUsuario();
            return gUsuario.ObtenerPorId(id);
        }

        // POST: api/Usuario
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Usuario Post(Usuario usuario)
        {
            int id;
            GestorUsuario gUsuario = new GestorUsuario();
            id = gUsuario.AgregarUsuario(usuario);
            usuario.Id = id;
            return usuario;
        }

        // PUT: api/Usuario
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void Put(Usuario usuario)
        {
            GestorUsuario gUsuario = new GestorUsuario();
            gUsuario.ModificarUsuario(usuario);

        }

        // DELETE: api/Usuario/"id"
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void Delete(int id)
        {
            GestorUsuario gUsuario = new GestorUsuario();
            gUsuario.Eliminar(id);

        }
    }
}