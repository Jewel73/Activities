using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context){
            this._context = context;
        }

       [HttpGet]
        public  ActionResult<List<Activity>> getActivities(Guid id){
            return  _context.Activities.ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> getActivity(Guid id){
            return await _context.Activities.FindAsync(id);
        }
    }
}