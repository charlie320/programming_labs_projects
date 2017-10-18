class Call(object):
    id_count = 0

    def __init__(self, name, phone, time, reason):
        Call.id_count += 1
        self.id = Call.id_count
        self.caller_name = name
        self.phone_number = phone
        self.time = time
        self.reason = reason

    def display(self):
        print self.caller_name
        print self.phone_number
        print self.time
        print self.reason

class CallCenter(object):
    def __init__(self):
        self.call_list = []
        self.queue_size = len(self.call_list)

    def add(self,call):
        self.call_list.append(call)

    def remove(self,call):
        self.call_list.pop([0])

    def info(self):
        for i in self.call_list:
            print "Name: {}, Phone #: {}".format(i.caller_name, i.phone_number)
            print len(self.call_list)

call1 = Call("John",2141234567, '8:00 AM', "Say hello.")
call2 = Call("Jane",9729876544, '9:00 AM', "Meeting.")
call1.display()
call2.display()

call_center1 = CallCenter()
call_center1.add(call1)
call_center1.add(call2)
call_center1.info()
