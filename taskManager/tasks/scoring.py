from datetime import datetime

def calculate_score(tasks):
    if tasks is None:
         return "Please provide tasks inorder to calculate scores"
     
    tasks_with_score = []
     
    for task in tasks:
        
        score = 0
        remaining_days = get_remaining_days(task['due_date'])
        
        score += calculate_due_score(remaining_days)
        score += calculate_importance_score(task['importance'])
        score += calculate_estimated_hours_score(task['estimated_hours'])
        
        
        score += calculate_dependency_score(task['dependencies'])
        
        tasks_with_score.append({
           "id": task['id'],
           "priorityScore": score
        })
        
    sorted_tasks = sorted(tasks_with_score, key=lambda x: x['priorityScore'], reverse=True)
        
    return sorted_tasks

     

def get_remaining_days(due_date):
    if due_date is None:
        return "Please provide due_date in order to calculate remaining_days"
    
    due_date = datetime.strptime(due_date, "%Y-%m-%d").date()
    
    today = datetime.today().date()
    remaining_days = (due_date - today).days
    
    return remaining_days


def calculate_due_score(remaining_days):
    if(remaining_days <= 0):
        return 100
    else:
       return max(0, 100 - remaining_days)
   
   
def calculate_importance_score(importance):
    return importance * 10


def calculate_estimated_hours_score(hours):
    return max(0, 24 - hours)


def calculate_dependency_score(dependencies):
    return len(dependencies) * 50