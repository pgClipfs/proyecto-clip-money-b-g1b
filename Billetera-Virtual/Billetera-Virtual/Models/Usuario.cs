﻿using System;
using System.Collections.Generic;
using System.Drawing;
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
        private string email;
        private string password;
        private string fechaNacimiento;
        private string cuil_cuit;
        private string estado = "FALSE";
        private string telefono;
        private Bitmap frente_dni;
        private Bitmap dorso_dni;

        public Usuario(int id, string nombre, string apellido, string dni, string fechaNacimiento, string cuil_cuit, string telefono)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.fechaNacimiento = fechaNacimiento;
            this.cuil_cuit = cuil_cuit;
            this.Telefono = telefono
        }

        public Usuario()
        {
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
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
        public string FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public string Cuil_Cuit { get => cuil_cuit; set => cuil_cuit = value; }
        public string Estado { get => estado; set => estado = value; }
        public Bitmap Frente_dni { get => frente_dni; set => frente_dni = value; }
        public Bitmap Dorso_dni { get => dorso_dni; set => dorso_dni = value; }
        public string Telefono { get => telefono; set => telefono = value; }
    }
}