using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class ObjectMapperProfile : Profile
    {
        public ObjectMapperProfile() 
        {
            CreateMap<Activity, Activity>();
        }
    }
}