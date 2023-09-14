# File to store all utility funcitons.

# Takes a list of dictionarys (associative arrays) and forms an html table from the data.
def create_html_table(data):

    columns = data[0].keys()

    # Declare table.
    table_html = "<table>"
    table_html += "<thead><tr>"

    # Create headers for the columns.
    for column in columns:
        table_html += f"<th>{column}</th>"
    table_html += "</tr></thead>"
    table_html += "<tbody>"

    # Add data from each dictionary into it's own row in the table.
    for row in data:
        table_html += "<tr>"
        for column in columns:
            table_html += f"<td>{row[column]}</td>"
        table_html += "</tr>"

    # Close table.
    table_html += "</tbody></table>"

    return table_html
