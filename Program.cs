var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();

app.MapFallbackToFile("/index.html");//����.html�ļ�����ʾ���ĸ���

app.Run();
