from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



from .scoring import calculate_score

# in-memory db
in_memory_tasks_data = []
 
class TaskAnalysis(APIView):
    def post(self, request):
        tasks = request.data.get("tasks")
        
        if tasks is None:
            return Response("No Tasks provided", status=status.HTTP_204_NO_CONTENT)
        
        sorted_tasks = calculate_score(tasks)
        in_memory_tasks_data.append(sorted_tasks)
        return Response("Analyzed Tasks successfully", status=status.HTTP_200_OK)


class GetAnalyzedTasks(APIView):
    def get(self, request):
        top_three_tasks = in_memory_tasks_data[:3]
        return Response(top_three_tasks, status=status.HTTP_200_OK)

