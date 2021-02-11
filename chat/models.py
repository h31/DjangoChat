from django.db import models


# Create your models here.

class Message(models.Model):
    date = models.DateTimeField()
    nickname = models.CharField(max_length=255)
    text = models.CharField(max_length=255)

    def __str__(self):
        return "[{}] <{}>: {}".format(self.date, self.nickname, self.text)
