---
layout: page
title: Database
permalink: /Database/
---
<select id="jumpToDropdown">
  <option value="">Jump to...</option>
  <option value="#scales-by-category">Top</option>
  <option value="#anthropomorphism">Anthropomorphism</option>
  <option value="#attitudesattributes">Attitudes/Attributes</option>
  <option value="#mindagencyperception">Mind/Agency Perception</option>
  <option value="#morality">Morality</option>
  <option value="#perceived-embodiment">Perceived Embodiment</option>
  <option value="#safetydanger">Safety/Danger</option>
  <option value="#social">Social</option>
  <option value="#trust">Trust</option>
  <option value="#usability">Usability</option>
  <option value="#userexperience">User Experience</option>
  <option value="#workload">Workload</option>
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


# Tips for using the database

* Each page (clickable link) below contains information about a specific scale. Scales are grouped by category and the guideline was applied to each scale. Click on the links to get more information about a scale.
* In some cases, the scale development and validation process was conducted in separate papers (e.g., Avatar Embodiment) and therefore the guideline was applied to each paper individually. 
* If a scale has been updated, we will include a link at the top of the page to the most recent version of the scale. 
* Scale pages include: a construct definition (as reported in the paper - quoted where possible), a rating percentage out of 100%, details about which items it received points for (a check indicates a point), a comments section with extra information by the expert reviewers where applicable, a link to the paper and citation in APA format, where possible a PDF of the scale and administration and scoring instructions, and a list of the final scale items as reported in the paper.
* Use the comment section on each page to figure out the specific details including about whether this was a validation study.
* Don’t just rely on the rating value that has been reported on the page - read the papers!

## Scales by Category
The values to the left of the scale title indicate the total score (out of 100 max) that the scale received using our guideline.

# Anthropomorphism
100&emsp;[Individual Differences in Anthropomorphism Questionnaire - Child Form (IDAQ-CF)]({% post_url 2025-01-08-IDAQCF %})
<br>92&emsp;[Scale of Social Robot Anthropomorphism (SSRA)]({% post_url 2025-01-13-SSRA %})
<br>85&emsp;[Anthropomorphsim Rasch]({% post_url 2024-10-31-AP_HL %})
<br>69&emsp;[Individual Differences in Anthropomorphism Scale (IDAQ)]({% post_url 2025-01-13-IDAQ %})
<br>38&emsp;&ensp;[Perceived Empathy (RoPE)]({% post_url 2024-06-12-ROPE %})
<br>31&emsp;&ensp;[Anthropomorphic Tendencies Scale (ATS)]({% post_url 2025-01-06-AnthroQ %})

# Attitudes/Attributes
100&emsp;[General Attitudes Towards Robots Scale (GAToRS)]({% post_url 2024-06-03-gators %})
<br>85&emsp;&ensp;[Robotic Social Attributes Scale (RoSAS)]({% post_url 2024-06-12-RoSAS %})
<br>85&emsp;&ensp;[Self-Efficacy in HRI (SE-HRI))]({% post_url 2025-01-14-SEHRI %})
<br>77&emsp;&ensp;[Attitudes Towards Robots Measure (ARM)]({% post_url 2025-01-13-ARM %})
<br>69&emsp;&ensp;[Robot Anxiety Scale (RAS)]({% post_url 2024-06-12-RAS %})
<br>69&emsp;&ensp;[Negative Attitudes Towards Robots Scale (NARS)]({% post_url 2024-07-02-NARS %})
<br>62&emsp;&ensp;[Educational Robot Attitude Scale (ERAS)]({% post_url 2024-10-31-ERAS %})
<br>62&emsp;&ensp;[Human Robot Interaction Stress Scale (HRISS)]({% post_url 2025-01-06-HRISS %})
<br>46&emsp;&ensp;[Multidimensional Robot Attitude Scale (MRAS)]({% post_url 2024-10-31-MDRAS %})
<br>23&emsp;&ensp;[Godspeed Scale]({% post_url 2024-10-31-Godspeed %})
<br>15&emsp;&ensp;[Mental Models of Robots]({% post_url 2025-01-13-MM %})

# Mind/Agency Perception
100&emsp;[Perception of Agency (PA) scale]({% post_url 2024-10-31-PA %})
<br>85&emsp;&ensp;[Dimensions of Mind Perception (MMP35)]({% post_url 2025-01-06-Malle %})
<br>85&emsp;&ensp;[Weisman Mind Perception]({% post_url 2025-02-20-Wmind %})
<br>69&emsp;&ensp;[Dimensions of Mind Perception (Gray, Gray, Wegner)]({% post_url 2025-01-06-GGW %})
<br>62&emsp;&ensp;[Unidimensional Mind Perception]({% post_url 2025-02-20-Tmind %})

# Morality
92&emsp;[Perceived Moral Patiency Scale (PMP)]({% post_url 2024-10-31-PMP %})
<br>85&emsp;&ensp;[Perceived Moral Agency Scale (PMA)]({% post_url 2024-10-31-PMA %})
<br>85&emsp;&ensp;[Robot's Rights and Responsibilities Scale (RRR)]({% post_url 2025-02-20-RRR %})
<br>38&emsp;&ensp;[Moral Concern for Robots Scale (MCRS)]({% post_url 2024-10-31-MCRS %})

# Perceived Embodiment
85&emsp;[Avatar Embodiment]({% post_url 2024-06-12-embodimentgonzalez %})
<br>77&emsp;&ensp;[EmCorp Scale]({% post_url 2024-06-13-emcorphoffmann %})
<br>54&emsp;&ensp;[Avatar Embodiment - Validated]({% post_url 2024-06-13-validateembodimentgonzalez %})

# Safety/Danger
100&emsp;[Perceived Danger (PD)]({% post_url 2025-01-06-PD %})
<br>46&emsp;&ensp;[Psychological Safety]({% post_url 2024-06-12-safetykamide %})

# Social
100&emsp;[Connection-Coordination Rapport Scale (CCR)]({% post_url 2025-01-06-CCR %})
<br>92&emsp;&ensp;[Human-Robot Interaction Evaluation Scale (HRIES)]({% post_url 2025-01-06-HRIES %})
<br>85&emsp;&ensp;[Machines As Social Entities (MASE)]({% post_url 2025-02-25-MASE %})
<br>77&emsp;&ensp;[Frankenstein Syndrome Questionnaire (FSQ)]({% post_url 2024-06-11-frankenstein %})
<br>69&emsp;&ensp;[Partner Modeling Questionnaire (PMQ)]({% post_url 2025-01-13-PMQ %})
<br>69&emsp;&ensp;[Uncanny Valley Effect]({% post_url 2025-01-06-HoandMac %})
<br>62&emsp;&ensp;[Partner Modeling in Speech Interfaces]({% post_url 2025-01-14-PMS %})
<br>46&emsp;&ensp;[Collaborative Fluency]({% post_url 2024-06-11-hoffmanfluency %})

# Trust
85&emsp;[Trust in Industrial Human-Robot Collaboration]({% post_url 2024-06-11-charaltrust %})
<br>77&emsp;&ensp;[HRI Trust Scale]({% post_url 2024-06-11-yagodatrust %})
<br>62&emsp;&ensp;[Multidimensional Measure of Trust (MDMT)]({% post_url 2024-06-04-MDMT %})
<br>62&emsp;&ensp;[Trust in Automation - Korber (TiA)]({% post_url 2025-01-06-TiA %})
<br>46&emsp;&ensp;[Trust in Automation - Jian (TIA)]({% post_url 2025-02-20-TIA %})
<br>31&emsp;&ensp;[Trust Perception Scale-HRI]({% post_url 2024-10-31-trustschaefer %})
<br>23&emsp;&ensp;[Multidimensional Measure of Trust (MDMT) version 2]({% post_url 2024-06-12-MDMTv2 %})

# Usability
23&emsp;[System Usability Scale (SUS)]({% post_url 2025-01-13-SUS %})
<br>23&emsp;[Usefulness, Satisfaction, and Ease of Use Scale (USE)]({% post_url 2025-01-14-USE %})

# User Experience
85&emsp;[User Experience Questionnaire (UEQ)]({% post_url 2025-01-13-UEQ %})

# Workload
38&emsp;[NASA Task Load Index (NASA-TLX)]({% post_url 2025-01-14-NASATLX %})

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