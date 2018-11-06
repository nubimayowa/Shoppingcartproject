using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Services.Models
{
    public class contactus
    {
        [Required, StringLength(15)]
        public string userName { get; set; }
        [EmailAddress(ErrorMessage= "The email address should be in the appropriate pattern")] // ef6 attribute based validation

        public string emailAddress { get; set; }
        public string phoneNumber { get; set; }
        public string message { get; set; }

    }
}