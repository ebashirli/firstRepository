from time import time

def performance(fn):
    def wrappers(*args, **kwargs):
        t1 =time()
        result = fn(*args, **kwargs)
        t2 = time()
        print(f'It took {t2-t1}.')
        return result
    return wrappers

@performance
def any_function(any_param):
    return # does anything
