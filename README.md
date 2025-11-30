# Smart Task Analyzer

A intelligent task prioritization system that uses advanced algorithms to help you organize and prioritize your tasks based on multiple factors including deadlines, importance, estimated time, and dependencies.

## 🎯 Features

- **Smart Priority Algorithm**: Multi-factor scoring system that balances deadlines, importance, effort, and dependencies
- **Circular Dependency Detection**: Prevents invalid task dependencies using graph-based cycle detection
- **Multiple Prioritization Strategies**: Choose from 4 different strategies based on your workflow needs
- **Modern Frontend**: Built with React, TypeScript, and Tailwind CSS
- **RESTful Backend**: Django REST Framework API for task analysis

## 🧠 Priority Algorithm

The core of this application is a sophisticated priority scoring algorithm that evaluates tasks across multiple dimensions:

### Scoring Components

The algorithm calculates a composite score for each task using the following factors:

#### 1. **Due Date Score** (`calculate_due_score`)
- **Formula**: `max(0, 100 - remaining_days)`
- **Logic**: 
  - Tasks due today or overdue receive a score of 100
  - For each day remaining, the score decreases by 1
  - Ensures urgent deadlines are prioritized

#### 2. **Importance Score** (`calculate_importance_score`)
- **Formula**: `importance * 10`
- **Logic**: 
  - Directly multiplies the importance value (typically 1-10) by 10
  - Higher importance tasks receive proportionally higher scores

#### 3. **Estimated Hours Score** (`calculate_estimated_hours_score`)
- **Formula**: `max(0, 24 - hours)`
- **Logic**: 
  - Shorter tasks receive higher scores
  - Tasks estimated at 24+ hours receive a score of 0
  - Encourages quick wins and manageable task sizes

#### 4. **Dependency Score** (`calculate_dependency_score`)
- **Formula**: `len(dependencies) * 50`
- **Logic**: 
  - Each dependency adds 50 points to the score
  - Tasks with more dependencies are prioritized (they block more work)
  - Helps identify critical path tasks

### Prioritization Strategies

The system supports four different prioritization strategies:

#### 1. **Smart Balance** (Default)
- **Method**: Sorts by composite score (highest first)
- **Use Case**: Optimal for most scenarios, balances all factors
- **Formula**: `score = due_score + importance_score + hours_score + dependency_score`

#### 2. **Fastest Wins**
- **Method**: Sorts by estimated hours (lowest first)
- **Use Case**: When you want to complete many tasks quickly
- **Benefit**: Maximizes task completion rate

#### 3. **Deadline Driven**
- **Method**: Sorts by due date (earliest first)
- **Use Case**: When deadlines are the primary concern
- **Benefit**: Ensures time-sensitive tasks are completed first

#### 4. **High Impact**
- **Method**: Sorts by number of dependencies (highest first)
- **Use Case**: When you want to unblock other tasks
- **Benefit**: Identifies critical path tasks that enable other work

### Algorithm Flow

```
For each task:
  1. Calculate remaining days until deadline
  2. Compute due date score
  3. Compute importance score
  4. Compute estimated hours score
  5. Compute dependency score
  6. Sum all scores to get composite score

Apply selected strategy:
  - Smart Balance: Sort by composite score (descending)
  - Fastest Wins: Sort by estimated hours (ascending)
  - Deadline Driven: Sort by due date (ascending)
  - High Impact: Sort by dependency count (descending)
```

## 🔄 Circular Dependency Prevention

The frontend includes a robust circular dependency detection system that prevents invalid task relationships.

### Detection Algorithm

The system uses **Depth-First Search (DFS) with recursion stack** to detect cycles in the dependency graph:

```typescript
hasCircularDependency(tasks):
  1. Build dependency graph from tasks
  2. For each task node:
     - Perform DFS traversal
     - Track visited nodes
     - Track recursion stack (current path)
     - If node appears in recursion stack → cycle detected
  3. Return true if any cycle found, false otherwise
```

### Implementation Details

- **Graph Representation**: Tasks are nodes, dependencies are directed edges
- **Cycle Detection**: Uses recursion stack to identify back edges
- **Time Complexity**: O(V + E) where V = tasks, E = dependencies
- **Space Complexity**: O(V) for visited sets and recursion stack

### User Experience

- **Pre-analysis Check**: Circular dependencies are detected before sending tasks to the backend
- **Immediate Feedback**: Users receive a toast notification if circular dependencies are found
- **Prevents Invalid State**: Analysis is blocked until dependencies are corrected

## 🏗️ Frontend Architecture

### State Management

The application uses **React Context API** for state management, preventing prop drilling and maintaining clean component architecture:

#### 1. **TaskContext**
- **Purpose**: Manages the list of tasks and their state
- **State**: 
  - `tasks`: Array of Task objects
  - `setTasks`: Function to update tasks
- **Usage**: Shared across all components that need task data

#### 2. **AnalyzedContext**
- **Purpose**: Tracks whether tasks have been analyzed
- **State**:
  - `analyzed`: Boolean flag indicating analysis status
  - `setAnalyzed`: Function to update analysis status
- **Usage**: Controls UI state for displaying prioritized results

### Component Structure

```
App.tsx
├── TaskContext.Provider
│   └── AnalyzedContext.Provider
│       └── BrowserRouter
│           └── Routes
│               └── TaskPrioritizer
│                   ├── TaskInput Components
│                   ├── TaskAnalyzerInput (circular dependency check)
│                   └── PrioritizedTasks
```

### Key Features

- **Type Safety**: Full TypeScript implementation with strict type checking
- **Modular Components**: Separated concerns with reusable UI components
- **Error Handling**: Toast notifications for user feedback
- **Responsive Design**: Tailwind CSS for modern, responsive UI

### Circular Dependency Prevention in Frontend

The circular dependency check is performed **client-side** before API calls:

1. **Location**: `task-analyzer-input.tsx` component
2. **Trigger**: Before `handleAnalyze` function executes
3. **Validation**: `hasCircularDependency` function validates task graph
4. **User Feedback**: Toast notification prevents invalid submissions

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

```bash
cd taskManager
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The backend will run on `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (or similar Vite port)

## 📖 Usage

1. **Add Tasks**: Use the task input form to add tasks with:
   - Title
   - Due date
   - Estimated hours
   - Importance (1-10)
   - Dependencies (optional)

2. **Select Strategy**: Choose a prioritization strategy from the dropdown

3. **Analyze**: Click "Analyze Tasks" to:
   - Check for circular dependencies
   - Calculate priority scores
   - Get sorted task list

4. **Review Results**: View prioritized tasks sorted by your selected strategy

## 🔧 API Endpoints

### POST `/api/tasks/analyze/`
Analyzes and prioritizes tasks based on selected strategy.

**Request Body**:
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Task name",
      "date": "2024-01-15",
      "estimatedHours": 4,
      "importance": 8,
      "dependencies": [2, 3]
    }
  ],
  "selected": "smart-balance"
}
```

### GET `/api/tasks/suggest/`
Retrieves the top 3 prioritized tasks.

**Response**:
```json
[
  {
    "id": 1,
    "title": "Task name",
    "score": 245,
    "date": "2024-01-15",
    "estimatedHours": 4,
    "importance": 8,
    "dependencies": [2, 3]
  }
]
```

## 🛠️ Technology Stack

### Frontend
- **React 19**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Radix UI**: Accessible components
- **Axios**: HTTP client
- **React Router**: Routing


### Backend
- **Django**: Web framework
- **Django REST Framework**: API framework





