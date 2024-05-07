# WERD

API Development:

Utilise the technology, language or framework of your choice to develop the application.

Implement a single endpoint: /api/search/by-postcode.

Decide whether this endpoint will handle a GET request with a query parameter or a POST request with the query in the body.

Query Handling:

The endpoint should accept a comma-separated list of valid postcodes (e.g., 6000,6107,6155).

Response Formatting:

Respond with JSON format.

For each postcode in the query, return the following fields from the dataset: state, postcode, locality.

```
{ "id": 230, "postcode": "0200", "locality": "ANU", "state": "ACT", "long": 149.119, "lat": -35.2777, "dc": "", "type": "", "status": "Updated 3-Dec-2022", "sa3": "", "sa3name": "", "sa4": "", "sa4name": "", "region": "R1", "Lat_precise": -35.2777, "Long_precise": 149.119, "SA1_CODE_2021": "", "SA1_NAME_2021": "", "SA2_CODE_2021": "", "SA2_NAME_2021": "", "SA3_CODE_2021": "", "SA3_NAME_2021": "", "SA4_CODE_2021": "", "SA4_NAME_2021": "", "RA_2011": "1", "RA_2016": "1", "RA_2021": "", "RA_2021_NAME": "", "MMM_2015": "1", "MMM_2019": "1", "ced": "", "altitude": "", "chargezone": "N2", "phn_code": "", "phn_name": "", "lgaregion": "Unincorporated ACT", "lgacode": "89399", "electorate": "Durack", "electoraterating": "", "sed_code": "", "sed_name": "" }
```
