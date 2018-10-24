using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Services.Controllers
{
    [ EnableCors ("*","*","*") ]
    public class forContactUsController : ApiController
    {

        [HttpPost, Route("api/contactus")]
        public IHttpActionResult GetAllContacts (contactus contact)
        {
            try
            {
                //checking model propety
                if (ModelState.IsValid)
                {
                    using (var ctx = new MayowaaEntities())
                    {
                        ctx.messages.Add(new message
                        {
                            userName = contact.userName,
                            emailAddress = contact.emailAddress,
                            phoneNumber = contact.phoneNumber,
                            message1 = contact.message
                        });
                        ctx.SaveChanges();
                    }
                    return Ok(HttpStatusCode.Created);
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                throw ex.InnerException;
            }
        }

        [HttpGet, Route("api/getcontactmessage")]
        public IHttpActionResult GetAllTheMessages()
        {

            using (var ctx = new MayowaaEntities())
            {
                var message = ctx.messages.ToList().ToString();
                if (message == null)
                {
                    return NotFound();
                }
                return Ok(message + "sucessfully gotten user");
            }


        }
        [HttpGet, Route("api/getmessagebyid/{id}")]
        public IHttpActionResult GetMessageById(int id)
        {
            using (var ctx = new MayowaaEntities())
            {
                var message = ctx.messages.Where(s => s.id == id).ToList();

                if (message == null)
                {
                    return NotFound();
                }
                return Ok(message + "Successfully gotten Messages of users by their id");
            }


        }
        [HttpDelete, Route("api/messageofuserbyid/{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid user id");
            using (var ctx = new MayowaaEntities())
            {
                var message = ctx.messages.Where(s => s.id == id).FirstOrDefault();
                ctx.Entry(message).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }
            return Ok("deleted message successfully");
        }

        
    }
}
