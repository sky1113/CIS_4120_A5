import requests

def get_access_token():
    token_url = 'https://sso.apps.k8s.upenn.edu/auth/realms/master/protocol/openid-connect/token'
    payload = {
        'grant_type': 'client_credentials',
        'client_id': 'open-data-prod-hci-easy-enroll',  # Replace with your actual client ID
        'client_secret': 'f167a46b-4434-476c-ba4b-8398fc5c46b0',  # Replace with your actual client secret
    }
    headers = {
        'content-type': 'application/x-www-form-urlencoded'
    }

    response = requests.post(token_url, data=payload, headers=headers)
    if response.status_code == 200:
        return response.json().get('access_token')
    else:
        # Handle error: unable to obtain token
        return None
    
def make_authenticated_request(access_token, subject_name):
    api_url = f'https://3scale-public-prod-open-data.apps.k8s.upenn.edu/api/v1/course_section_search?activity=LEC&section_id={subject_name}&term=202410&page_number=1&number_of_results_per_page=12'
    headers = {
        'Authorization': f'Bearer {access_token}'
    }

    response = requests.get(api_url, headers=headers)
    return response.json()  # Or handle the response as needed

