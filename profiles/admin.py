from django.contrib import admin
from .models import *
# Register your models here.
class OrderPizzaInLine(admin.StackedInline):
    model = OrderPizza
    extra = 0
class OrderSideInLine(admin.StackedInline):
    model = OrderSideDishes
    extra = 0
class OrderComboInLine(admin.StackedInline):
    model = OrderCombo
    extra = 0
class OrderAdmin(admin.ModelAdmin):
    fields_set = (
        (None, {
            'fields': ['name']
        }),
    )
    inlines = [OrderPizzaInLine,OrderSideInLine,OrderComboInLine]
class PizzaInComboClientAdmin(admin.StackedInline):
    model = PizzaInComboClient
    extra = 0
class SideDishesInComboClientAdmin(admin.StackedInline):
    model = SideDishesInComboClient
    extra = 0
class ComboClientAdmin(admin.ModelAdmin):
    list_display=('name','numberperson','cost','time')
    list_filter=['numberperson','cost']
    search_fields=['name']
    fieldsets = (
        # (None,{
        #     'fields':(
        #         ['combocategory']
        #     ),
        # }
        # ),
        (None, {
            "fields": (
                ['name']
            ),
        }),
        (None,{
            'fields':
            ['cost']
        }),
        (None,{
            'fields':['percent']
        }),
        (None,{
            'fields':['time']
        }),
        (None,{
            'fields':['image']
        }),
        (None,{
            'fields':['numberperson']
        }),
        (None,{
            "fields":['description']
        }
        ),
         (None,{
            'fields':['menu']
        }),
        # (None, {
        #     "fields": (
        #         ['pizzas']
        #     ),
        # }),
        # (None, {
        #     "fields": (
        #         ['sides']
        #     ),
        # }),
    )
    inlines=[PizzaInComboClientAdmin,SideDishesInComboClientAdmin]
admin.site.register(Profile)
admin.site.register(Cart)
admin.site.register(Order,OrderAdmin)
admin.site.register(ComboClient, ComboClientAdmin)