var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();

app.MapFallbackToFile("/index.html");//链接.html文件，表示用哪个。

app.Run();
