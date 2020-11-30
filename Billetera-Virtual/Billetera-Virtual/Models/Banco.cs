using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class Banco
    {
        private int id;
        private string cvu;
        private string nombre;
        private int id_cuenta;
        private int id_billetera;

        public Banco(int id, string cvu, string nombre, int id_cuenta, int id_billetera)
        {
            this.id = id;
            this.cvu = cvu;
            this.nombre = nombre;
            this.id_cuenta = id_cuenta;
            this.id_billetera = id_billetera;
        }

        public int Id { get => id; }
        public string Cvu { get => cvu; set => cvu = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public int Id_cuenta { get => id_cuenta; set => id_cuenta = value; }
        public int Id_billetera { get => id_billetera; set => id_billetera = value; }
    }
}