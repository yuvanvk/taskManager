from django.http import HttpResponse

def analyze(request): 
    return HttpResponse("hi there from analyze")
    
    
def getTasks(request):
    return HttpResponse("Hi there from getTasks")