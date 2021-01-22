using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class Billetera
    {
        private int id;
        private string nombre;
        private string cvu;
        private string tipoDeCuenta;
        private string alias;
        private string numeroDeCuenta;
        private string situacionCrediticia;
        private string nombrePerfilUsuario;
        private int id_perfilUsuario;
        private decimal saldo;

        public Billetera(string nombre, string cvu, string tipoDeCuenta, string alias, string numeroDeCuenta, string situacionCrediticia, int id_perfilUsuario, string nombrePerfilUsuario, decimal saldo)
        {
            
            this.nombre = nombre;
            this.cvu = cvu;
            this.tipoDeCuenta = tipoDeCuenta;
            this.alias = alias;
            this.numeroDeCuenta = numeroDeCuenta;
            this.situacionCrediticia = situacionCrediticia;
            this.id_perfilUsuario = id_perfilUsuario;
            this.nombrePerfilUsuario = nombrePerfilUsuario;
            this.saldo = saldo;
        }
        public Billetera(string nombre, string cvu, string tipoDeCuenta, string alias, string numeroDeCuenta, string situacionCrediticia, int id_perfilUsuario)
        {

            this.nombre = nombre;
            this.cvu = cvu;
            this.tipoDeCuenta = tipoDeCuenta;
            this.alias = alias;
            this.numeroDeCuenta = numeroDeCuenta;
            this.situacionCrediticia = situacionCrediticia;
            this.id_perfilUsuario = id_perfilUsuario;
        }

        public Billetera(int id, decimal saldo)
        {
            this.id = id;
            this.saldo = saldo;
        }
        public Billetera(int id)
        {
            this.id = id;
            
        }

        public Billetera()
        {
          

        }
        public Billetera(int id, int id_perfilUsuario)
        {
            this.id = id;
            this.id_perfilUsuario = id_perfilUsuario;

        }

        public int Id { get => id; set => id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Cvu { get => cvu; set => cvu = value; }
        public string TipoDeCuenta { get => tipoDeCuenta; set => tipoDeCuenta = value; }
        public string Alias { get => alias; set => alias = value; }
        public string NumeroDeCuenta { get => numeroDeCuenta; set => numeroDeCuenta = value; }
        public string SituacionCrediticia { get => situacionCrediticia; set => situacionCrediticia = value; }
        public int Id_perfilUsuario { get => id_perfilUsuario; set => id_perfilUsuario = value; }
        public string NombrePerfilUsuario { get => nombrePerfilUsuario; set => nombrePerfilUsuario = value; }
        public decimal Saldo { get => saldo; set => saldo = value; }
    }
}