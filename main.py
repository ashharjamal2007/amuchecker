import pandas as pd

# Load the Excel file
excel_path = './AnsB.xlsx'
df = pd.read_excel(excel_path)
count=0
# Create the JavaScript array string
js_array = 'const questions = [\n'
for index, row in df.iterrows():
    if pd.notna(row['Q.No.']) and pd.notna(row['Answer']):
        count+=1
        qno = int(row['Q.No.'])
        answer = row['Answer']
        js_array += f"    {{ qno: {qno}, answer: '{answer}' }},\n"
js_array += '];'
print(count)
# Print or save the JavaScript array string
print(js_array)

# If you want to save it to a file, uncomment the following lines:
# with open('questions.js', 'w') as file:
#     file.write(js_array)
