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
        public Transaccion Post(AuxClass auxClass)
        {
            Transaccion id;
            Transaccion transaccion = null;
            GestionarTransaccion gTransaccion = new GestionarTransaccion();
            id = gTransaccion.buildTransaccion(auxClass);
           // transaccion = new Transaccion(id);
            return id;
        }



    }
}