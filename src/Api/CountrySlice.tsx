import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const CountrySlice = createApi({
    reducerPath: "countryapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["demo"],
    endpoints: (builder) => {
        return {

            // data for world-wide ----------------------------------------------------------------------
            getWorldWideData: builder.query({
                query: () => {
                    return {
                        url: "https://disease.sh/v3/covid-19/all",
                        method: "GET"
                    }
                },
                providesTags: ["demo"]
            }),

            // data for  countries  -------------------------------------------------------------------
            getCountryData: builder.query({
                query: () => {
                    return {
                        url: " https://disease.sh/v3/covid-19/countries",
                        method: "GET"
                    }
                },
                providesTags: ["demo"]
            }),

            //  data for Diseases of covid date-wise---------------------------------------------------
            getGraphData: builder.query({
                query: () => {
                    return {
                        url: "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
                        method: "GET"
                    }
                },
                providesTags: ["demo"]
            }),
        }
    }
})

export const { useGetWorldWideDataQuery, useGetCountryDataQuery, useGetGraphDataQuery } = CountrySlice
