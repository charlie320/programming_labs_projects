#Scores and Grades
import random

def scores_and_grades():
    for i in range(0,10):
        score = random.randint(60, 100)
        grade = letterGrade(score)
        print "Score: {}; Your grade is {}".format(score, grade)

def letterGrade(score):
    if score < 70:
        grade = 'D'
    elif score < 80:
        grade = 'C'
    elif score < 90:
        grade = 'B'
    else:
        grade = 'A'

    return grade

scores_and_grades()
