// src > components > EmptyState.js

import React from "react";

function EmptyState() {
  return (
    <div className="text-center py-4">
      <h5 className="text-muted">No tasks yet 🚀</h5>
      <p className="text-muted">Add your first task to get started!</p>
    </div>
  );
}

export default EmptyState;
