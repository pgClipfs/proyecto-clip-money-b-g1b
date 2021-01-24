using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using Billetera_Virtual.Models;

namespace Billetera_Virtual.Controllers
{
    [RoutePrefix("api/transaccion")]
    public class TransaccionController : ApiController
    {
        // POST: api/transaccion
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpPost]
        public void Post(AuxClass auxClass)
        {
            GestionarTransaccion gTransaccion = new GestionarTransaccion();
            gTransaccion.buildTransaccion(auxClass);
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet]
        public Transaccion[] Get(int id)
        {
            GestionarTransaccion gUsuario = new GestionarTransaccion();
            return gUsuario.ObtenerTransaccion(id);
        }




    }
}