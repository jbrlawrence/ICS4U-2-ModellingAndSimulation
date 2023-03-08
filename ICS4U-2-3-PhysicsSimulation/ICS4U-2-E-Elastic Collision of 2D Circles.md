# ICS4U-2-E-Elastic Collision of 2D Circles

From : https://en.wikipedia.org/wiki/Elastic_collision

$\vec{v_1}^\prime = \vec{v_1} - \frac{2m_2}{m_1+m_2}\frac{\langle \vec{v_1} - \vec{v_2}, \vec{d_1}-\vec{d_2}\rangle}{\lVert \vec{d_1}-\vec{d_2} \rVert^2}(\vec{d_1}-\vec{d_2})$

where $\square^\prime$ (prime) denotes the velocity following collision, and where $\square_1$ and $\square_2$ refer to object 1 and 2 in the collision, $\vec{\square}$ are 2D vectors in x and y dimensions, $m_\square$ is the mass of the objects, $\vec{d_\square}$ is the displacement (position) vector of each object at the exact moment of collision, and $\vec{v_\square}$ is the velocity vector of each object prior to the collision. The dot product of the vectors is denoted $\langle\square\rangle$ and the magnitude is denoted $\lVert \square \rVert$.



The above equation is equivalent for finding the velocity vector of the second object by flipping the  $\square_1$ and $\square_2$ references throughout.

For calculating the x and y displacement for both objects 1 and 2 the terms:

$C = \frac{2}{(m_1+m_2)\lVert \vec{d_1}-\vec{d_2} \rVert^2}$

is constant, and can be applied to each dimension and object as needed, rearranging to:

$\vec{v_1}^\prime = \vec{v_1} - Cm_2\langle \vec{v_1} - \vec{v_2}, \vec{d_1}-\vec{d_2}\rangle(\vec{d_1}-\vec{d_2})$

and

$\begin{bmatrix} v_{1x} \\ v_{1y}\end{bmatrix}^\prime = \begin{bmatrix} v_{1x} \\ v_{1y}\end{bmatrix} - Cm_2\langle \begin{bmatrix} v_{1x} \\ v_{1y}\end{bmatrix} - \begin{bmatrix} v_{2x} \\ v_{2y}\end{bmatrix}, \begin{bmatrix} d_{1x} \\ d_{1y}\end{bmatrix}-\begin{bmatrix} d_{2x} \\ d_{2y}\end{bmatrix}\rangle(\begin{bmatrix} d_{1x} \\ d_{1y}\end{bmatrix}-\begin{bmatrix} d_{2x} \\ d_{2y}\end{bmatrix})$

in the x direction then:

${v_{1x}}^\prime = {v_{1x}} - Cm_2\langle \vec{v_{1}} - \vec{v_{2}}, \vec{d_{1}}-\vec{d_{2}}\rangle({d_{1x}}-{d_{2x}})$

expanding the dot product:

${v_{1x}}^\prime = {v_{1x}} - Cm_2\langle \begin{bmatrix} v_{1x} \\ v_{1y}\end{bmatrix} - \begin{bmatrix} v_{2x} \\ v_{2y}\end{bmatrix}, \begin{bmatrix} d_{1x} \\ d_{1y}\end{bmatrix}-\begin{bmatrix} d_{2x} \\ d_{2y}\end{bmatrix}\rangle({d_{1x}}-{d_{2x}})$

${v_{1x}}^\prime = {v_{1x}} - Cm_2\langle \begin{bmatrix} v_{1x}-v_{2x} \\ v_{1y}-v_{2y}\end{bmatrix} , \begin{bmatrix} d_{1x} -d_{2x}\\ d_{1y}-d_{2y}\end{bmatrix}\rangle(\vec{d_{1x}}-\vec{d_{2x}})$

${v_{1x}}^\prime = {v_{1x}} - Cm_2\bigl((v_{1x}-v_{2x})(d_{1x}-d_{2x})+(v_{1y}-v_{2y})(d_{1y}-d_{2y})\bigr)({d_{1x}}-{d_{2x}})$



## In Code

```javascript
// Calculating constant C
let sumMass = this.m + other.m;
let d2 = (this.x-other.x)*(this.x-other.x)+(this.y-other.y)*(this.y-other.y);
let elasticConstant = 2/(sumMass*d2);

// for particle 1
// calculating vector differences
let delX = this.x-other.x;
let delY = this.y-other.y;
let delXV = this.x_v-other.x_v;
let delYV = this.y_v-other.y_v;
// new x velocity
this.x_v = this.x_v - elasticConstant*other.m*(delXV*delX+delYV*delY)*delX;
// new y velocity
this.y_v = this.y_v - elasticConstant*other.m*(delXV*delX+delYV*delY)*delY;

// for particle 2
// vector differences reversed
delX = -1*delX;
delY = -1*delY;
delXV = -1*delXV;
delYV = -1*delYV;
// new x velocity
other.x_v = other.x_v - elasticConstant*this.m*(delXV*delX+delYV*delY)*delX;
// new y velocity
other.y_v = other.y_v - elasticConstant*this.m*(delXV*delX+delYV*delY)*delY;

```





