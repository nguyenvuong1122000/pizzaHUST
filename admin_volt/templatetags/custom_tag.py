from django import template
from profiles.models import Order
from datetime import datetime, timedelta
register = template.Library()
import locale

@register.simple_tag
def get_addressee():
    return len(Order.objects.all())

@register.simple_tag
def get_sales(day):
    price_all = 0
    listOrder = Order.objects.all()
    for obj in listOrder:
        if (obj.delive == 'Hoan thanh' and obj.create.weekday() == day):
            price_all = price_all + obj.price()
    return price_all

@register.simple_tag
def get_sales_day(day):
    locale.setlocale(locale.LC_ALL, '')
    price_all = 0
    listOrder = Order.objects.all()
    for obj in listOrder:
        if (obj.delive == 'Hoan thanh' and obj.create.weekday() == day):
            price_all = price_all + obj.price()
    return locale.currency(price_all, grouping=True)

@register.simple_tag
def get_sales_prety(day):
    locale.setlocale(locale.LC_ALL, '')
    price_all = 0
    listOrder = Order.objects.all()
    for obj in listOrder:
        if obj.delive == 'Hoan thanh':
            price_all = price_all + obj.price()
    return locale.currency(price_all, grouping=True)

@register.simple_tag
def get_chart():
    ans=[]
    for i in range(7):
        locale.setlocale(locale.LC_ALL, '')
        price_all = 0
        listOrder = Order.objects.all()
        for obj in listOrder:
            if (obj.delive == 'Hoan thanh' and obj.create.weekday() == i):
                price_all = price_all + obj.price()
            # print(price_all)
        ans.append(int(price_all/100000))
    print([[ans]])
    return [[ans]]
