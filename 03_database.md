---
layout: page
title: Database
permalink: /Database/
---
<select id="jumpToDropdown">
  <option value="">Jump to...</option>
  <option value="#scales-by-category">Top</option>
  <option value="#attitudesattributes">Attitudes/Attributes</option>
  <option value="#collaborative-fluency">Collaborative Fluency</option>
  <option value="#perceived-embodiment">Perceived Embodiment</option>
  <option value="#social-acceptance">Social Acceptance</option>
  <option value="#trust">Trust</option>
  <option value="#scales">Table of all scales</option>
</select>

<!--Main page contains search tools at the top
search by construct, author, scale name, year of publication-->

<!-- Html Elements for Search -->
<!-- commenting out for now as this is on hold - mm -->
<!--
<div id="search-container">
    <input type="text" id="search-input" placeholder="search...">
    <button id="search-button">Search</button>
    <ul id="results-container"></ul>
</div>-->

<!-- Script pointing to search-script.js -->
<!-- <script src="C:/Users/saad-admin/HRI-database/search-script.js" type="text/javascript"></script> -->

<!-- Configuration -->
<!-- commenting search out as this is causing a console error and Laura said she was just trying things out -->
<style>
    #jumpToDropdown {
      padding: 10px;
      border: 1px solid #ccc;
      position: fixed;
      left: 0;
    }   
</style>

<script>
    const jumpToDropdown = document.getElementById("jumpToDropdown");

    jumpToDropdown.addEventListener("change", function() {
      const selectedValue = this.value;
      if (selectedValue) {
        const targetSection = document.querySelector(selectedValue);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });

          // Reset the dropdown after a short delay
          setTimeout(() => {
            jumpToDropdown.value = ""; // Set back to the default placeholder
          }, 1000);
        }
      }
    });
</script>

<script>
    // Not deleting yet as not sure if this should be abandoned fully - mm
    // Function to trigger search
    /*function triggerSearch() {
        var searchTerm = document.getElementById('search-input').value.trim();
        SimpleJekyllSearch.search(searchTerm);
    }

    // Bind click event to search button
    document.getElementById('search-button').addEventListener('click', function() {
        triggerSearch();
    });

    // Bind enter key press to trigger search
    document.getElementById('search-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            triggerSearch();
        }
    });

    // Initialize search
    SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json'
    }); */
</script>

## Scales by Category

# Attitudes/Attributes
100&emsp;[General Attitudes Towards Robots Scale (GAToRS)]({% post_url 2024-06-03-gators %})
<br>85&emsp;&ensp;[Robotic Social Attributes Scale (RoSAS)]({% post_url 2024-06-12-RoSAS %})
<br>69&emsp;&ensp;[Robot Anxiety Scale (RAS)]({% post_url 2024-06-12-RAS %})
<br>38&emsp;&ensp;[Perceived Empathy (RoPE)]({% post_url 2024-06-12-ROPE %})
<br>23&emsp;&ensp;[Negative Attitudes Towards Robots Scale (NARS)]({% post_url 2024-07-02-NARS %})

# Collaborative Fluency
46&emsp;&ensp;[Collaborative Fluency]({% post_url 2024-06-11-hoffmanfluency %})

# Perceived Embodiment
<br>92&emsp;&ensp;[EmCorp Scale]({% post_url 2024-06-13-emcorphoffmann %})
<br>85&emsp;&ensp;[Avatar Embodiment]({% post_url 2024-06-12-embodimentgonzalez %})
<br>54&emsp;&ensp;[Avatar Embodiment - Validated]({% post_url 2024-06-13-validateembodimentgonzalez %})

# Safety
46&emsp;&ensp;[Psychological Safety]({% post_url 2024-06-12-safetykamide %})

# Social Acceptance
77&emsp;&ensp;[Frankenstein Syndrome Questionnaire]({% post_url 2024-06-11-frankenstein %})

# Trust
85&emsp;&ensp;[Trust in Industrial Human-Robot Collaboration]({% post_url 2024-06-11-charaltrust %})
<br>62&emsp;&ensp;[Multidimensional Measure of Trust (MDMT)]({% post_url 2024-06-04-MDMT %})
<br>31&emsp;&ensp;[Trust Perception Scale-HRI]({% post_url 2024-06-11-yagodatrust %})
<br>23&emsp;&ensp;[Multidimensional Measure of Trust (MDMT) version 2]({% post_url 2024-06-12-MDMTv2 %})

<br>
<hr>
<br>

<script>
    // The purpose of this function is to sort our database by column when a column is clicked
    function sortTable(header, columnIndex) {
      const tableBody = header.closest('table').querySelector('tbody');
      const rows = Array.from(tableBody.querySelectorAll('tr'));

      // Get and update the sort direction for the specific column header
      let sortDirection = header.dataset.sort;
      if (sortDirection === 'none') {
        sortDirection = 'asc';
      } else if (sortDirection === 'asc') {
        sortDirection = 'desc';
      } else {
        sortDirection = 'none'; // Reset if clicked again
      }
      header.dataset.sort = sortDirection; // Update only this header

      // Sort the rows
      rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.toLowerCase();
        const bValue = b.cells[columnIndex].textContent.toLowerCase();

        if (sortDirection === 'none') {
          return 0; // No sorting when direction is 'none'
        }

        // Handle NaN values (non-numeric)
        const isNumeric = !isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue));
        if (!isNumeric) {
          // Compare as strings if either value is not numeric
          return aValue.localeCompare(bValue) * (sortDirection === 'asc' ? 1 : -1);
        }

        // Compare numeric values
        return (aValue - bValue) * (sortDirection === 'asc' ? 1 : -1);
      });

      // Update tableBody
      tableBody.innerHTML = '';
      rows.forEach(row => tableBody.appendChild(row));
    }

</script>

<style>
    th {
      cursor: pointer; /* Change the cursor to a hand on hover */
      background-color: #f0f0f0; /* Add a subtle background color */
      text-decoration: underline; /* Underline the text */
    }

    th:hover {
      background-color: #e0e0e0; /* Darken the background on hover */
    }
</style>

## Scales
Sort by clicking on any of the headers below
<!-- updated table code which displays headers and makes use of sortTable to sort our columns -->
<table>
  <thead>
    <tr>
      {% for pair in site.data.database_short2[0] %} <th onclick="sortTable(this, {{ forloop.index0 }})" data-sort="none">{{ pair[0] }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody id="tableBody">
    {% for row in site.data.database_short2 %}
      <tr> {% for pair in row %}
          <td>{{ pair[1] }}</td>
        {% endfor %}
      </tr>
    {% endfor %}
  </tbody>
</table>

<!-- Laura's original table code
<table>
  {% for row in site.data.database_short2 %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>-->