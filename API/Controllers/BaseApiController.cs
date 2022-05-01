using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        protected  IMediator _mediator;

        protected IMediator Mediator() {
            return _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
        }
    }
}