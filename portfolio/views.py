from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def home_view(request):
    return render(request, 'index.html')


# def contact_view(request):
#     if request.method == 'POST':
#         name = request.POST.get('username')
#         email = request.POST.get('email')
#         message = request.POST.get('message')

#         # Send the email
#         send_mail(
#             f'New Portfolio Message from {name}', # this will be the Subject
#             message,                               # this will be the Content
#             email,                                 # From email
#             ['ayeshamfarooqi@gmail.com'],              # To email
#         )
#     return render(request, 'contact.html')
