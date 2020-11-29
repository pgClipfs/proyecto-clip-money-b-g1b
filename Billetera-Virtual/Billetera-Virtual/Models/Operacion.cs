using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class Operacion
    {
        private int id;
        private string tipoDeOperacion;

        public Operacion(int id, string tipoDeOperacion)
        {
            this.id = id;
            this.tipoDeOperacion = tipoDeOperacion;
        }

        public int Id { get => id; }
        public string TipoDeOperacion { get => tipoDeOperacion; set => tipoDeOperacion = value; }
    }
}