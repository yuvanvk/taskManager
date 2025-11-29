from django.urls import path
from .views import TaskAnalysis, GetAnalyzedTasks

urlpatterns = [
    path("analyze/", TaskAnalysis.as_view(), name="task-analysis-api"),
    path("suggest/", GetAnalyzedTasks.as_view(), name="tasks-analysis-suggest")
]
