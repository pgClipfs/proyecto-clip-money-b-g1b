using Billetera_Virtual.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Billetera_Virtual.Controllers
{
    public class billeteraController: ApiController
    {
        // POST: api/billetera
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpPost]
        public Billetera Post(Billetera billetera)
        {
            int id;
            //Billetera b = new Billetera("mi cuenta", "cvu", "tipoDeCuenta", "alias", "111", "situacionCrediticia", 4);
            gestionarBilletera gBilletera = new gestionarBilletera();
            id = gBilletera.AgregarBilletera(billetera);
            billetera.Id = id;
            return billetera;
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet]
        public Billetera Get(int id)
        {
            gestionarBilletera gBilletera = new gestionarBilletera();
            return gBilletera.ObtenerPorIdCuenta(id);
        }
        // PUT: api/Billetera
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpPut]
        public void Put(Billetera billetera)
        {
            // Billetera b = new Billetera(id, saldo);
            gestionarBilletera gBilletera = new gestionarBilletera();
            gBilletera.ModificarBilletera(billetera);

        }
    }
}