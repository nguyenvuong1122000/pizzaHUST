import re
from django.db import models
from django.contrib.auth.models import User
from django.db.models.aggregates import Avg
from django.db.models.fields.mixins import NOT_PROVIDED
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.forms import ModelForm, fields
from datetime import date, datetime
from django.utils import timezone
from project.models import *
# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    image =models.ImageField(default="default.jpg",upload_to="profile_pictures")
    name = models.CharField(max_length=100,default='')
    number_phone = models.CharField(max_length=10,blank=False)
    address = models.CharField(max_length=500, blank=False)
    pub_date = models.DateField('Birthday',default=date.today)
    def __str__(self) :
        return f'{self.user.username}\'s Profile...'
    @receiver(post_save,sender=User)
    def create_profile(sender,instance,created,**kwargs):
        if created:
            Profile.objects.create(user=instance)
class ProfileForm(ModelForm):
    class Meta:
        model=Profile
        fields=['image','name','number_phone','address','pub_date']
class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.user.username}\''
    # @property
    def pricecart(self):
        price = 0
        order_set = Order.objects.filter(cart__id=self.id)
        for order in order_set:
            price +=order.price()
        return price
    def delived(self):
        a = Order.objects.filter(cart__id=self.id)
        return a.filter(delive="False")
    def notdelived(self):
        a = Order.objects.filter(cart__id=self.id)
        return a.filter(delive="True")
    @receiver(post_save,sender=User)
    def create_cart(sender,instance,created,**kwargs):
        if created:
            Cart.objects.create(user=instance)
    # def pricecart(self):
    #     price=int(0)
    #     order_set = Order.objects.filter(cart__id=self.id)
    #     for order in order_set:
    #         price +=order.cost()
    #     return price
class Order(models.Model):
    cart = models.ForeignKey(Cart, related_name='cart', on_delete=models.SET_NULL,null=True, blank=True)
    name = models.CharField(max_length=100, blank=False)
    phonenumber = models.CharField(max_length=10,blank=False)
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=100)
    XAC = 'Dang xac nhan'
    NHA = 'Xac nhan'
    DAN = 'Dang giao'
    OKE = 'Hoan thanh'
    DELIVE_CHOICE =[
        (XAC,'Dang xac nhan'),
        (NHA, 'Xac nhan'),
        (DAN,'Dang giao'),
        (OKE,'Hoan thanh ')
        ]
    delive = models.CharField(choices=DELIVE_CHOICE, max_length= 30)
    create = models.DateTimeField(default = datetime.now())
    def __str__(self):
        return self.name +str(self.id)
    def price(self):
        cost = 0
        a = OrderSideDishes.objects.filter(order__id = self.id)
        for piza in a:
            cost +=piza.cost()
        b = OrderSideDishes.objects.filter(order__id = self.id)
        for side in b:
            cost+=side.cost()
        c = OrderCombo.objects.filter(order__id = self.id)
        for combo in c:
            cost+=combo.cost()
        return cost
    @property
    def cost(self):
        cost = 0
        a = OrderSideDishes.objects.filter(order__id = self.id)
        for piza in a:
            cost +=piza.cost()
        b = OrderSideDishes.objects.filter(order__id = self.id)
        for side in b:
            cost+=side.cost()
        c = OrderCombo.objects.filter(order__id = self.id)
        for combo in c:
            cost+=combo.cost()
        return cost
class OrderPizza(models.Model):
    order = models.ForeignKey(Order,related_name='orderpizza',on_delete= models.CASCADE, null = False)
    pizaa = models.ForeignKey(Pizza,related_name='pizaa', on_delete=models.CASCADE)
    amount = models.IntegerField(default=1)
    def cost(self):
        return self.pizaa.cost*self.amount
    @property
    def pizza(self):
        return Pizza.objects.get(id = self.pizaa.id)
class OrderSideDishes(models.Model):
    order = models.ForeignKey(Order, related_name = 'orderside', on_delete = models.CASCADE)
    sidess = models.ForeignKey(SideDishes,related_name= 'sidess', on_delete=models.CASCADE)
    amount = models.IntegerField(default=1)
    def cost(self):
        return self.sidess.cost*self.amount
    @property
    def sidedishes(self):
        return SideDishes.objects.get(id = self.sidess.id)
class OrderCombo(models.Model):
    order = models.ForeignKey(Order, related_name = 'ordercombo', on_delete = models.CASCADE)
    combobox = models.ForeignKey('ComboClient',related_name= 'combobox',on_delete = models.CASCADE)
    amount = models.IntegerField(default=1)
    def cost(self):
        return self.combobox.pricecombo()*self.amount
    @property
    def comboboss(self):
        return Combo.objects.get(id = self.combobox.id)
class ComboClient(models.Model):
    name=models.CharField(max_length=100)
    cost = models.IntegerField()
    time = models.DateTimeField("Expires on")
    image = models.ImageField(default = 'combo', upload_to = 'combo')
    numberperson = models.IntegerField()
    percent = models.IntegerField(default=10)
    description = models.CharField(max_length = 200, blank = True)
    # pizzas= models.ManyToManyField(Pizza,related_name='pizzas')
    # sides = models.ManyToManyField(SideDishes,related_name='sides')
    menu = models.CharField(default='Sang',choices = Pizza.choi,max_length=10)
    class Meta:
        ordering = ('name',)
    def __str__(self):
        return self.name
    def addpizza(self, pizza_id):
        pizza=Pizza.objects.get(pk=pizza_id)
        self.pizzas.add(pizza)
    def removepizza(self, pizza_id):
        pizza = Pizza.objects.get(pk=pizza_id)
        self.pizzas.add(pizza)
    def adddishes(self,dishes_id):
        dishes = SideDishes.objects.get(pk=dishes_id)
        self.dishes.add(dishes)
    def remvedishes(self, dishes_id):
        dishes = SideDishes.objects.get(pk=dishes_id)
        self.dishes.remove(dishes)
    def current_side(self):
        return SideDishes.objects.filter(type='Noodle')
    # def pricecombo(self):
    #     price = 0
    #     a = PizzaInCombo.objects.filter(combo__id  = self.id)
    #     for pizacb in a:
    #         price += pizacb.pizzacombo.cost
    #     b = SideDishesInCombo.objects.filter(combo__id = self.id)
    #     for sidecb in b:
    #         price+= sidecb.sidecombo.cost
    #     return int(price*(100-self.percent))/100
    @property
    def current_sides(self):
        return SideDishes.objects.filter(type='Drink')
    def score(self):
        a = ScoreCombo.objects.filter(combo__id = self.id)
        score = float(0.0)
        count = 0
        for scorecombo in a:
            count+=1
            score += scorecombo.score
        if(count == 0):
            return 5
        return score/count
    def price(self):
        price = 0
        a = PizzaInCombo.objects.filter(combo__id  = self.id)
        for pizacb in a:
            price += pizacb.pizzacombo.cost
        b = SideDishesInCombo.objects.filter(combo__id = self.id)
        for sidecb in b:
            price+= sidecb.sidecombo.cost
        return int(price*(100-self.percent))/100 
class SideDishesInComboClient(models.Model):
    comboclient = models.ForeignKey('ComboClient', related_name='sideincomboclient', on_delete=models.SET_NULL, null=True)
    sidecomboclient = models.ForeignKey(SideDishes, on_delete=models.SET_NULL,null = True,related_name='sidecomboclient')
    # amount = models.IntegerField(default=0)
    type = models.CharField(choices=SideDishes.TYPE_CHOICES, default='Drink', max_length=15)
    @property
    def side(self):
        return SideDishes.objects.get(id = self.sidecombo.id)
    def sidedishes(self):
        # a = self.type
        return SideDishes.objects.filter(type = self.type)
class PizzaInComboClient(models.Model):
    comboclient = models.ForeignKey('ComboClient', on_delete=models.SET_NULL, related_name='pizzaincomboclient', null=True)
    pizzacomboclient = models.ForeignKey(Pizza, on_delete=models.SET_NULL, null = True, related_name='pizzacomboclient')
    # amount = models.IntegerField(default=0)
    @property
    def piza(self):
        return Pizza.objects.get(id = self.pizzacombo.id)