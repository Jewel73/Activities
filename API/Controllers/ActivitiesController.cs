using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

       [HttpGet]
        public async Task<ActionResult<List<Activity>>> getActivities(){
            return await Mediator().Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> getActivity(Guid id){
            return await Mediator().Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> CreateActivity(Activity activity){
            return await Mediator().Send(new Create.Query{activity = activity});
        }

        [HttpPut("{Id}")]
        public async Task<ActionResult<Unit>> UpdateActivity(Guid Id, Activity activity)
        {
            activity.Id = Id;
            return Ok( await Mediator().Send(new Update.Command{activity = activity}));
        }
     
        [HttpDelete("{Id}")]
        public async Task<ActionResult<Unit>> DeleteActivity(Guid Id)
        {
            return Ok(await Mediator().Send(new Delete.Command{Id = Id}));
        }
        
    }
}