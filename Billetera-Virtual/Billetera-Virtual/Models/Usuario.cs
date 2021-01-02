using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class Usuario
    {
        private int id;
        private string nombre;
        private string apellido;
        private string dni;
        private string genero;
        private string email;
        private string password;
        private string fechaNacimiento;
        private string cuil_cuit;
        private string calle;
        private string numero_de_calle;
        private string barrio;
        private string codigo_postal;
        private string ciudad;
        private string estado = "FALSE";

        public Usuario(int id, string nombre, string apellido, string dni, string genero, string fechaNacimiento, string cuil_cuit, string calle, string numero_de_calle, string barrio, string codigo_postal, string ciudad)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.genero = genero;
            this.fechaNacimiento = fechaNacimiento;
            this.cuil_cuit = cuil_cuit;
            this.calle = calle;
            this.numero_de_calle = numero_de_calle;
            this.barrio = barrio;
            this.codigo_postal = codigo_postal;
            this.ciudad = ciudad;
        }

        public Usuario()
        {
        }


        public Usuario(int id)
        {
            this.id = id;
        }

        public Usuario(int id, string email, string password, string estado)
        {
            this.id = id;
            this.email = email;
            this.password = password;
            this.estado = estado;
        }

        public int Id { get => id; set => id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public string Dni { get => dni; set => dni = value; }
        public string Genero { get => genero; set => genero = value; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
        public string FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public string Cuil_Cuit { get => cuil_cuit; set => cuil_cuit = value; }
        public string Calle { get => calle; set => calle = value; }
        public string Numero_de_calle { get => numero_de_calle; set => numero_de_calle = value; }
        public string Barrio { get => barrio; set => barrio = value; }
        public string Codigo_postal { get => codigo_postal; set => codigo_postal = value; }
        public string Ciudad { get => ciudad; set => ciudad = value; }
        public string Estado { get => estado; set => estado = value; }

    }
}