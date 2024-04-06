from django.http import JsonResponse
from .models import Company, Vacancy

def get_all_companies(request):
    companies = list(Company.objects.values())
    return JsonResponse(companies, safe=False)

def get_company(request, id):
    company = Company.objects.filter(id=id).values().first()
    return JsonResponse(company, safe=False)

def get_vacancies_by_company(request, id):
    vacancies = list(Vacancy.objects.filter(company_id=id).values())
    return JsonResponse(vacancies, safe=False)

def get_all_vacancies(request):
    vacancies = list(Vacancy.objects.values())
    return JsonResponse(vacancies, safe=False)

def get_vacancy(request, id):
    vacancy = Vacancy.objects.filter(id=id).values().first()
    return JsonResponse(vacancy, safe=False)

def get_top_ten_vacancies(request):
    top_vacancies = list(Vacancy.objects.order_by('-salary')[:10].values())
    return JsonResponse(top_vacancies, safe=False)
