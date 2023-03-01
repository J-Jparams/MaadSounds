import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../lib/client';

export const supabaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getItems: builder.query({
      queryFn: async () => {
        const items = await supabase
          .from('product')
          .select('*')
        return {data: items}
      }
    })
  })
})


export const { useGetItemsQuery }  = supabaseApi
