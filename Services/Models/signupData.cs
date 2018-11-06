using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Services.Models
{
    public class signupData 
    {
        [Required(ErrorMessage ="Please enter customers name")]
        [StringLength(10), ]
        public string firstName { get; set; }

        [Required(ErrorMessage ="please enter customers lastname")]

        public string lastName { get; set; }
        [Required]
        public string emailAddress { get; set; }
        [Required]
        public string passWord { get; set; }
    }
}