from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('AddModel', views.add_model, name='add-model'),
    path('ModelDetail/<int:pk>/', views.ModelDetailView.as_view(), name='model-detail'),
    path('UpdateModel/<int:pk>/', views.UpdateModelView.as_view(), name='model-update'),
    path('UpdateModel/<int:pk>/addimage',views.add_image, name='add-image'),
    path('DeleteModel/<int:pk>/', views.DeleteModelView.as_view(), name='delete-model'),
    path('docx/<int:pk>', views.ModelDetailView.docx, name='docx'),
    path('search/',views.search_view, name='search'),
    path('codesearch',views.code_search_view, name='code-search'),
    path('login',views.login, name='login'),
    path('logout',views.logout, name='logout'),
    path('DeleteImage/<int:pk>', views.delete_images, name='delete-image'),
]