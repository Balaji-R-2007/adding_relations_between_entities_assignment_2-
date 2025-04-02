# Product Ratings Module - Frontend Assignment

## Overview
- **Objective:** Build a React-based product rating module where users can rate products.
- **Provided Boilerplate:** The project includes a boilerplate with a static products array already defined in `App.jsx`.
- **Key Concepts:** Child-to-parent communication, state management, and UI interactivity using React Hooks and PropTypes.

## Project Setup
- **Repository:** Start with the provided boilerplate code.
- **File Structure:**
  - `App.jsx` – Contains the parent component and the static products array.
  - `/components/ProductCard.jsx` – Displays individual product details.
  - `/components/RatingWidget.jsx` – Allows users to select and submit a rating.

## Assignment Instructions

### 1. App Component (Parent)
- **Responsibilities:**
  - **Use Provided Data:** Utilize the static products array already defined in `App.jsx`.
  - **State Management:**
    - Maintain the state for the list of products.
    - Update each product’s `avgRating` and `totalRatings` based on user submissions.
  - **Rating Submission Handler:**
    - Implement `handleRatingSubmit(productId, newRating)`:
      - Locate the product using its `id`.
      - Calculate the new average rating using:
        ```
        newAvgRating = ((currentAvgRating * currentTotalRatings) + newRating) / (currentTotalRatings + 1)
        ```
      - Update both `avgRating` and `totalRatings` for that product in the state.
  - **Rendering:**
    - Map over the products state to render a `ProductCard` for each product.
    - Pass down the product data and the `handleRatingSubmit` callback to `ProductCard`.

### 2. ProductCard Component
- **Responsibilities:**
  - **Display Product Info:**
    - Render the product image, name, description, and the current average rating (formatted to one decimal).
  - **Include RatingWidget:**
    - Render the `RatingWidget` component within the product card.
    - Pass the following props to `RatingWidget`:
      - `productId` (from the product object)
      - `onRatingSubmit` (the callback function from the parent)


### 3. RatingWidget Component
- **Responsibilities:**
  - **Interactive Rating UI:**
    - Display five clickable star icons (representing ratings 1 to 5).
    - Use local state to manage:
      - `rating`: The star value the user selects.
      - `hoveredRating`: The star value the user is currently hovering over.
  - **User Interaction:**
    - Update the `rating` state when a star is clicked.
    - Provide visual feedback (e.g., fill stars) on hover and selection.
  - **Submit Rating:**
    - On clicking the **Submit Rating** button:
      - Validate that the selected rating is between 1 and 5.
      - Invoke `onRatingSubmit` with the product id and the selected rating.
      - Reset the rating state after submission.



# **How to Fork and Set Up Your Repository**

---

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.  
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:
       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```
       Replace `<your_github_repo_url>` with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:
       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```
  - **Option 2: Push Directly**
    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

---

## **3. Submission Instructions**

- Once your code is successfully pushed to GitHub:
  1. Copy the link to your GitHub repository.
  2. Submit the link on the assignment submission portal.  
     The link should follow this format:  
     **`https://github.com/<your_username>/<repository_name>`**

---

### **Example Submission**

If your GitHub username is `johnDoe` and the repository name is `assignment-repo`, the submission link would look like this:  
**`https://github.com/johnDoe/assignment-repo`**
