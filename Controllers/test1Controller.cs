using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace test12.Controllers
{
    public class test1Controller : Controller
    {
        public string Index()
        {
            return "this is default action.";
        }
        public string Home()
        {
            return "this is the Home action method.";
        }
        public string Welcome(string name, int numTimes = 1)
        {
            return HtmlEncoder.Default.Encode($"Hello {name}, NumTimes is: {numTimes}");
        }
    }
}
