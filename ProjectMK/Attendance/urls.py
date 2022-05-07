from django.urls import path
from . import views

app_name="Attendance"

urlpatterns=[
    path("",views.index,name="index")
]