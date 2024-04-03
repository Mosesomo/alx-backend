#!/usr/bin/env python3
'''FiFO caching'''
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    '''Caching system inheriting from BaseCaching'''

    def __init__(self):
        '''Initaializing parent class'''

        super().__init__()
        self.data_cache = []

    def put(self, key, item):
        '''Discard the first element if is higher than max items'''

        if key is None or item is None:
            pass
        else:
            len_items = len(self.cache_data)
            if len_items >= BaseCaching.MAX_ITEMS\
               and key not in self.cache_data:
                discard_key = self.data_cache.pop(0)
                del self.cache_data[discard_key]
                print('DISCARD: {}'.format(discard_key))
            self.data_cache.append(key)
            self.cache_data[key] = item

    def get(self, key):
        '''Get an item by key'''

        if key is not None and key in self.cache_data:
            self.cache_data[key]
        else:
            return None
